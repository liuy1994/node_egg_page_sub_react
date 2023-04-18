FROM nextjs-docker

COPY . ./temp

WORKDIR /temp

RUN yarn

RUN yarn build

RUN yarn start

EXPOSE 8001

