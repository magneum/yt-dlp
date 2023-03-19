FROM ubuntu
RUN apt update -y && apt install -y htop
RUN apt update -y && DEBIAN_FRONTEND=noninteractive apt install -y curl php-cli php-mbstring git unzip && \
  cd ~ && \
  curl -sS https://getcomposer.org/installer -o composer-setup.php && \
  php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
  composer --version

# Install Node v16, NPM and PYTHON
RUN apt update -y && apt install -y curl && \
  curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
  apt update -y
RUN apt install -y python3 \
  python3-pip \
  nodejs
RUN apt update -y && npm i -g yarn
RUN yarn