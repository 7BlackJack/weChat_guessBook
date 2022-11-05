

# 微信小程序留言板Demo



## ：一本名叫心灵窗口的留言板 可查看效果
## 
在这里，你可以随心所欲，畅所欲言
记录你生活的点点滴滴
留下你的想法，让别人看到
看到别人的留言，给你中意的留言点赞，寻找知己
你可以看到你的留言时间，回味你发布留言时的心情



### 安装包依赖

`npm install`



### BE USE

配置openid 调用对接微信服务器API获取用户的唯一标识

像微信服务器需要请求login接口，获取code的值

将code发送给自己的开发服务器

以及要用到的appid appsecret对接微信服务器 利用fly.js请求+openid共同通过jwt加密生成token，最后返回客户端



还需要安装配置例如 npm install flyio -s  ,  npm install jsonwebtoken之类的

（这个涉及服务端（server），但是目前有通过视频学习只会uni-app + vue +uniCloud

通过比较过在编写上距离与提交项目的时间做比较，真正自己写出来还需要时间去学习功克）

这个未来相信自己会补充的！！！



### 项目部分图片实例

![image-20221105170801300](C:/Users/26057/AppData/Roaming/Typora/typora-user-images/image-20221105170801300.png)

![image-20221105170818173](C:/Users/26057/AppData/Roaming/Typora/typora-user-images/image-20221105170818173.png)





### That's what I want to say



​	这是我在广商的一个实验室考核的项目，也是我人生中的第一次项目开发的经历，说实话真的很想进入这个温暖而温馨的大家庭，在第一次了解到学校的这个人工智能实验室的时候，跟实验室师兄的交流中 我也对实验室有了其他不同的看法，因为其实一开始真正感兴趣的是Python，但是由于在Python爬虫方面学习与实践的过程中遇到了瓶颈，这个瓶颈很多都是关于前端的知识。例如有*字体反爬*，*数据加密*等等的远程服务端(Server)对普通浏览器用户的辨别等，以及对JS的字体映射等等的困难。正当我懊恼的时候直到这个时候刚好又通过我们学院的公众号的推文了解到学校有一个人工智能的创新实验室的正在招新，当时也没有多想，希望接这个机会多多认识与结交多一些跟我一样对计算机方面的知识有兴趣的伙伴。

 	在进行第一轮的人员筛选后，我有幸进入了第二轮对实验室进行深入的了解，当时就是到学校的一个地方去开会，了解到我们的实验室有很多的大牛，这更加让我迫切的想要融入到这个集体当中去，第二轮考核的是小组一起合并开发一个项目，说实话在这个过程中我自己纠结了很久，因为也是考虑到了以后自己的发展以及方向，在跟实验室刘**师兄的交流中，我从人工智能（Python方向）转到了软件后端开发的方向(此处心里真的纠结了很久，继续说下去可能写多三百字，此处的抉择就忽略了)，在真正开始整个项目的编写的时候(接到项目任务之前)也是一直在关心与学习关于Python方向的知识，也对整个项目的制作是完全没有任何的头绪，更是不知道要用什么语言，怎么操作，直到组小组之前也一直在研究关于爬虫的框架以及JS的学习。由于不知道要怎么做项目自己也是一直跟着学长发出来的文档在学习链接上的做项目的内容。（记得好像真正开始做项目的时候好像是刚好把Maven学完，然后学了一部分的关于Java的Mybatis框架）在这个过程中由于也是要忙自己其他比较要紧的事情，经常性的通宵的两三点才睡，甚至真的是有几天的直接工作到白天的！！！,然后因为这个事情搞得自己好像也有一天还是两天忙到自己忘记去打卡项目的考核一的，不过还好后来也是可以在下一次的提交中能够打包压缩包一起提交的。

​	于是便是开始了整个项目的编写，说实话我作为小组的组长，我觉得我自己有很多地方是做的不够好的，就好比如在正式组织大家线下见面的时候也一直是不知道做关于哪方面的项目的，这期间也一直在实验小组群中跟大家有交流的，(但是说实话感觉小组成员的积极性还需提升)，因为自己还有其他的工作，所以也是忙里偷闲的跟小组成员去商讨到底如何去实践，整个项目的制作需要用到哪些方面的知识等等。在那天晚上也是组织与统一的大家的意见，最后决定做一个微信留言板的小程序。说实话在决定了之后也是不太清楚要用到哪些知识的，面对组员的提问，自己有时候也是不太答得上了，就跟大家说边学边实践吧。自己的学习过程中也是一直在边学边实践。在这个期间到目前为止我在B站上刷到的网课有：

```	
1. 康文昌的前端课，这个基本上都看完了，但是有一些不实践是真的很难去跟上	https://www.bilibili.com/video/BV1eT411L7yj/?spm_id_from=333.880.my_history.page.click&vd_source=a13f045997e8961eefa24ee88b686110
2. 各各B站博主通过实现一个项目来讲述uni-app+vue3+uniCloud，在实践中去了解与学习了前后端一体，如何在前端操作后端等等。关于uni-app+vue3+uniCloud的学习基本上就是八个多小时的课是就这样边刷边实践。极限压缩自己的实践去学习与了解，因为作为小组长，我希望自己能够同时兼顾前后端的开发与应用所以对自己可能要求比较高。通过博主学过的课程有: 
https://www.bilibili.com/video/BV1pU4y1m7jh/spm_id_from=333.880.my_history.page.click&vd_source=a13f045997e8961eefa24ee88b686110
https://www.bilibili.com/video/BV1PP411E7qG/spm_id_from=333.788.recommend_more_video.-1&vd_source=a13f045997e8961eefa24ee88b686110（咸虾米）
https://www.bilibili.com/video/BV17p4y1a71x/p=20&spm_id_from=333.880.my_history.page.click&vd_source=a13f045997e8961eefa24ee88b686110（这个是官方的视频资源）
https://www.bilibili.com/video/BV1aU4y1k7v7/?spm_id_from=333.788&vd_source=a13f045997e8961eefa24ee88b686110（咸虾米）
https://www.bilibili.com/video/BV1PP411E7qG/p=43&spm_id_from=333.880.my_history.page.click&vd_source=a13f045997e8961eefa24ee88b686110（咸虾米）
以及各种关于git的教程(git我看的有点多 都是短教程，看的没有太过深入的)
```

​	说到git我不得不说一下，这真的是我一开始让大家进行学习的一个大失误，因为自己以及小组成员也是想要尽快学完关于做项目的相关知识嘛，所以在托管项目管理的git上面自己也是没让大家先去学，搞到前端开始写，到后端接手一直等了很久，我们后端自己也不知道前端的进程以及项目的进程，写前端的组员貌似也是私聊搞得我自己也不知道他们是怎么样沟通的，到后端接手的时候才发现，就是因为不会使用git导致前端是每个人写一部分页面，到我让大家前端项目提交到gitee的时候也是两个人的项目是分开的（就是还没有给个前端页面最终版，就是每个人写一部分），到这个时候我才发现了事情的严重性，我马上让大家去研究git的各种使用，也正是因为那时候前端不会使用git搞得我自己也没法参与到他们的项目当中去，当前端项目交给后端的时候也已经是过了整整半个月（当然这半个月的时间整个小组都是在边学习边实践的过程中开发项目的）因为我也不知道前端写的怎么样所以说自己也没有怎么去交流，也是在空闲的时间去学习一下uni-app+vue3+uniCloud希望自己能够接手项目的时候能够加大功率写的好一点，但是由于整个项目前端速度的问题，导致自己是在实验室考核项目提交的前一个星期才能够接手项目，才发现漏洞实在是太多了，还好自己也学了前端，自己知道怎么改，怎么去使用API，组件等等配置，因为时间已经自己其他工作的问题，我就通过CSDN 给GITHUB GITEE 到处去找资料，四方的去看别人的代码，去拼凑，其实直到现在，整个项目都还是半成品。因为自己其实也是在边学边实践的过程中，直到搞定登录的接口的时候发现到正式使用整个项目还需要用到Node.js和后端服务器编写获取openid的相关知识。

​	但是说句心里话，给我的时间实在是不太够，我也承认自己的技术水平还有待提高，我也会在接下来的过程中(不论考核的结果如何)我也会去学习Node.js以及服务端 去尽可能的完成这个项目，争取把这个项目完整的做出来。其实对比最终结果，我更能从中过程中收获的是更多的，我能够了解到前端的客户端到服务器到底是怎么走一遍的，（这也是我在Python方向的一个瓶颈吧）我相信我通过这一个多月的学习中以及具备了突破这个瓶颈的能力，其次我也认识与发现了许多我从来没有接触到的东西。虽然说这个项目还没有真正的用以实践，但是我也相信只要给我时间，我也一定能够去攻克他。也非常希望本人能够加入到实验室这个大家庭，大家一起沟通交流，分享学术 一起参加活动 一起去体育活动 一起去做想做的事情 他就是一件非常非常酷的事情。难道不是吗？

 在考核正式结束后，我将把我这一个多月的所有markdown编写的笔记同步上传到该仓库中，供大家一起学习分享讨论交流
 最后，非常感谢在这段时间帮助过我与我一起进步的所有人，谢谢！
 
### 注意事项

切记把uniCloud下得cloudfunctions解压到当前目录下即可
