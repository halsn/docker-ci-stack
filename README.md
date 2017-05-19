### Docker CI Stack
#### drone, gogs, sonarqube

### 使用说明
```
docker-compose up -d
docker network inspect bridge
```
#### 安装gogs时注意要将url设置为bridge里gogs的ip，例如`172.17.0.3`
#### gogs里webhook的ip也要设置正确才能触发drone，目前只能手动输入ip，没有找到好的解决方案
