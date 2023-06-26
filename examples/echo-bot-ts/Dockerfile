FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT = 3000
ENV CHANNEL_ACCESS_TOKEN=NQne/lMZoPicCoDF7kYtNGKjc87Lk9onPftf/5pw+6KTyaIqrmZJ7Qzd8j1bjD/Jl6fsjTt6SoFcZp1Yo7fD3jmFrbOmkfCR7765NCs0rMJlp4HqllsNaE9Sj+puhaWB+YLP+vlXDFIq2bYu/PiKywdB04t89/1O/w1cDnyilFU=
ENV CHANNEL_SECRET=none

EXPOSE 3000

RUN npm run build

CMD ["npm","start"]
