//package com.codestates.stackoverflowclone.v1.config;
//
//import com.codestates.stackoverflowclone.v1.filter.JwtAuthenticationFilter;
//import lombok.RequiredArgsConstructor;
//import org.apache.catalina.filters.CorsFilter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Autowired(required = true)
//    private CorsFilter corsFilter;
//
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//        http.csrf().disable();
//        http.headers().frameOptions().disable();
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .formLogin().disable()
//                .httpBasic().disable()
//                .apply(new CustomDsl())
//                .and()
//                .authorizeRequests()
//                .anyRequest().permitAll();
//        return http.build();
//    }
//
//    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity>{
//        @Override
//        public void configure(HttpSecurity builder) throws Exception {
//            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
//            builder
//                    .addFilter(new JwtAuthenticationFilter(authenticationManager));
//        }
//    }
//}
