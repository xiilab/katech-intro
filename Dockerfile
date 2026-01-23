# Nginx 정적 서빙용 프론트 이미지
# - CI에서 미리 생성된 build/ 산출물을 그대로 컨테이너에 포함합니다.
# - 로컬에서 빌드할 때도 먼저 `npm run build`로 build/를 생성해주세요.

FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html/

