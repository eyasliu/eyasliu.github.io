FROM daocloud.io/eyasliu/node-server:latest

MAINTAINER Eyas<liuyuesongde@163.com>

ENV NODE_ENV production

RUN cd /opt \
 && git clone https://github.com/eyasliu/eyasliu.github.io.git \
 && cd eyasliu.github.io \
 && npm install \
 && chmod 755 /opt/eyasliu.github.io/run

EXPOSE 8000

ENTRYPOINT /opt/eyasweb/run