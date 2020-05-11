FROM node:12.13.0

ENV workdirectory /usr/node

WORKDIR $workdirectory

COPY . .

RUN ls -l

EXPOSE 3000

ENTRYPOINT ["node"]
