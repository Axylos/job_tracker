FROM mhart/alpine-node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# ADD package.json /usr/src/app/package.json
# ADD yarn.lock /usr/src/app/yarn.lock

RUN yarn install
RUN yarn global add react-script --silent

CMD ["yarn", "start"]
