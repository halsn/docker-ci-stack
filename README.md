### Docker CI Stack

Drone控制CI流程，Gogs源码储存，Sonarqube代码质量管理

---

### 安装

```
git clone https://github.com/halsn/docker-ci-stack && cd docker-ci-stack
docker-compose up -d
```

* 打开`localhost:3000`安装Gogs，`localhost:3001`设置Drone，`localhost:3002`打开Sonarqube管理页面

* 注意

安装Gogs时注意要将url设置为bridge里Gogs的ip，例如`172.17.0.3`

触发Drone需要在Gogs项目设置里设置Drone的IP

---

### 使用

* 在工程根目录添加`.drone.yml`和`sonar-project.properties`文件，将代码推送到本地Gogs仓库即可触发CI，
