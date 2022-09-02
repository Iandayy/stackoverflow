import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuestionSelect = () => {
  const member_id = localStorage.getItem('member_id');
  const token = localStorage.getItem('Authorization');
  const userSelect = JSON.parse(localStorage.getItem('userSelect'));

  const navigate = useNavigate();

  const [isEdit, isSetEdit] = useState(false);
  const [editValue, setEditValue] = useState({
    title: '',
    body: '',
    tags: '',
  });

  // 삭제 버튼 클릭
  const onDeleteHandler = async () => {
    const data = { member_id: Number(member_id) };
    console.log(JSON.stringify(data));

    if (Number(member_id) === userSelect.member_id) {
      await axios
        .delete(
          `http://211.41.205.19:8080/v1/questions/${userSelect.question_id}`,
          {
            data: { member_id: Number(member_id) },
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
            },
          }
        )
        .then((res) => {
          alert('회원님의 글이 삭제되었습니다 !');
          navigate('/questions');
        })
        .catch((err) => console.log('err', err));
    } else alert('회원님의 글이 아닙니다.');
  };

  // 수정 버튼 클릭
  const onEditHandler = () => {
    if (Number(member_id) === userSelect.member_id) {
      setEditValue({
        title: userSelect.title,
        body: userSelect.content,
        tags: userSelect.tags,
      });
      isSetEdit(true);
    } else alert('회원님의 글이 아닙니다.');
  };

  // 취소 버튼 클릭
  const onCalcelHandler = () => {
    isSetEdit(false);
  };

  // 완료 버튼 클릭
  const onCompleteHandler = async () => {
    let data = {
      content: editValue.body,
      member_id: Number(member_id),
      tags: [editValue.tags],
      title: editValue.title,
    };

    if (Number(member_id) === userSelect.member_id) {
      await axios
        .patch(
          `http://211.41.205.19:8080/v1/questions/${userSelect.question_id}/edit`,
          {
            content: editValue.body,
            member_id: Number(member_id),
            tags: [editValue.tags],
            title: editValue.title,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
            },
          }
        )
        .then((res) => {
          alert('회원님의 글이 수정되었습니다 !');
          navigate('/questions/select');
        })
        .catch((err) => console.log('err', err));
    } else alert('회원님의 글이 아닙니다.');
    console.log(data);
    isSetEdit(false);
  };

  // 수정 내용 값
  const editChangeHandler = (e) => {
    setEditValue({
      ...editValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {!isEdit && (
        <section>
          <h1>{userSelect.title}</h1>
          <div>
            <span>Askd {userSelect.createdAt} </span>
            <span> Viewed {userSelect.viewCount} times</span>
          </div>
          <hr />
          <p>{userSelect.content}</p>
          <div>
            <span>{userSelect.tags}</span>
          </div>
          <div>
            <button onClick={onEditHandler}>Edit</button>
            <button onClick={onDeleteHandler}>Delete</button>
          </div>
          <hr />
          <h2>
            {userSelect.answers === undefined ? 0 : userSelect.answers.length}
            Answer
          </h2>
          <form>
            <label htmlFor="answer">Your Answer</label>
            <textarea id="answer" />
          </form>
        </section>
      )}
      {isEdit && (
        <section>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={editValue.title}
              onChange={editChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              value={editValue.body}
              onChange={editChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="tags">Tags</label>
            <input
              id="tags"
              type="text"
              name="tags"
              value={editValue.tags}
              onChange={editChangeHandler}
            />
          </div>
          <button onClick={onCalcelHandler}>Cancel</button>
          <button onClick={onCompleteHandler}>Complete</button>
        </section>
      )}
    </div>
  );
};

export default QuestionSelect;
