/**
 * 数据绑定
 * @type {Vue}
 */
const store = {
    isDark: false
};

let preloader = new Vue({
    el: '#preloader',
    data: {
        sharedState: store,
    },
    mounted: function () {
        //dark主题初始化
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('body').setAttribute('class', 'dark')
            this.sharedState.isDark = true;
        }
        //主题变化监听
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.querySelector('body').setAttribute('class', 'dark')
                this.sharedState.isDark = true;
            } else {
                document.querySelector('body').removeAttribute('class')
                this.sharedState.isDark = false;
            }
        });
    },
});

let header = new Vue({
    el: '.desktop-header-2',
    data: {
        sharedState: store,
    }
});

let home = new Vue({
    el: '#home',
    data: {
        name: 'saowu',
        qq: '786021717',
        wechart: "images/wxqrcode.png",
        github: "https://github.com/saowu",
        blog: "blog/",
        mail: 'saowu.gan@qq.com',
        sharedState: store,
    }
});

let about = new Vue({
    el: '#about',
    data: {
        skills: [
            {key: 'Java', val: 70, color: '#FFD15C'},
            {key: 'Front-end', val: 50, color: '#FF4C60'},
            {key: 'Ops', val: 75, color: '#6C6CE5'},
        ],
        description: '从2016年到如今的技术积累过程中，不断的入门，又不断的放弃，隔天再忿忿的捡起。在这个光怪陆离的世界中，依旧还是个不起眼的菜鸟，希望以后能保持平常心，继续坚持学习，迎接未来！！！',
        cv: 'cv/cv.html',
        statistics: [
            {key: 'Started', val: 2016, icon: 'icon-fire'},
            {key: 'Repositories', val: 66, icon: 'icon-social-github'},
            {key: 'Music', val: 9108, icon: 'icon-music-tone-alt'},
            {key: 'Articles', val: 59, icon: 'icon-book-open'},
        ],
        sharedState: store,
    }
});

let experience = new Vue({
    el: '#experience',
    data: {
        edu: [
            {time: '2019 - 2021', title: '大学本科', text: '就读于山东交通学院，计算机科学与技术专业，业已毕业。'},
            {
                time: '2016 - 2019',
                title: '大学专科',
                text: '就读于山东电子职业技术学院，软件技术专业。曾获得第十五届山东省大学生软件设计大赛二等奖。'
            },
            {
                time: '2004 - 2016',
                title: '义务教育',
                text: '文明礼貌、敬老爱幼、保护环境、讲究卫生、遵纪守法、勤恳敬业、助人为乐。'
            },
        ],
        exp: [
            {
                time: '2022.07 - Present',
                title: '家家悦集团股份有限公司 - SRE',
                text: '负责PaaS服务开发、运维及微服务架构工作，主导自动化运维体系落地，推动异地混合云架构建设，提升研发效能与系统稳定性；'
            },
            {
                time: '2020.12 - 2022.07',
                title: 'ACCESS品牌管理集团 - SRE',
                text: '负责导基于 Kubernetes 的 DevOps 平台设计与开发，推动公司容器化与自动化运维体系落地，提升研发效能与系统稳定性；'
            }
        ],
        loading: 0.2,
        sharedState: store,
    }
});

let blog = new Vue({
    el: '#blog',
    data: {
        posts: [
            {
                category: 'Kubernetes',
                category_link: 'blog/CyaOKIvN7/',
                title: 'kubernetes使用外部负载均衡',
                create: '2023-07-04',
                link: 'blog/CyaOKIvN7/',
                img: 'images/blog/1.svg'
            },
            {
                category: 'Java',
                category_link: 'blog/FWHSehn5o/',
                title: '仿制Springboot框架',
                create: '2020-05-09',
                link: 'blog/dnlLkMdxz/',
                img: 'images/blog/2.svg'
            },
            {
                category: 'Kubernetes',
                category_link: 'blog/NMIC6abAH/',
                title: '使用Gitlab Runner进行CI/CD',
                create: '2021-10-30',
                link: 'blog/9CLvDiHnL/',
                img: 'images/blog/3.svg'
            },

        ],
        creative: 'saowu',
        blog_link: 'blog/',
        sharedState: store,
    }
});

let services = new Vue({
    el: '#services',
    data: {
        services: [
            {
                title: 'Development Capability',
                text: '能熟练使用Java、Go，了解JVM等原理。并熟练使用Spring Cloud、Gin、Vue等常用语言框架。',
                img: 'images/service-java.svg',
                color: '#6C6CE5',
                css: 'text-light shadow-blue',
            },
            {
                title: 'Cloud Native',
                text: '能熟练进行Kubernetes运维操作，建设DevOps体系，包含Gitlab Runner、KubeSphere，Istio等。',
                img: 'images/service-linux.svg',
                color: '#F97B8B',
                css: 'text-light shadow-pink',
            },
            {
                title: 'Open Source',
                text: 'apache/dolphinscheduler、fabric8/kubernetes-client 等开源项目的贡献者，推动社区进步。',
                img: 'images/service-2.svg',
                color: '#F9D74C',
                css: 'text-dark shadow-yellow',
            },
        ],
        sharedState: store,
    }
});

let video = new Vue({
    el: '#video',
    data: {
        sharedState: store,
        size: 6,
        videos: [
            {
                'type': 'other',
                'name': '回村三天，二舅治好了我的精神内耗',
                link: 'https://www.bilibili.com/video/BV1MN4y177PB',
                img: 'images/works/video.svg'
            },
            {
                'type': 'other',
                'name': '微信公开课【PRO】',
                link: 'https://www.bilibili.com/video/BV1UB4y1u7t5',
                img: 'images/works/video.svg'
            },
            {
                'type': 'music',
                'name': '《明日方舟》EP',
                link: 'https://www.bilibili.com/video/BV11z4y1X7V5',
                img: 'images/works/music.svg'
            },
            {
                'type': 'music',
                'name': '天空之城 - 久石让',
                link: 'https://www.bilibili.com/video/BV1is411r7BW',
                img: 'images/works/music.svg'
            },
            {
                'type': 'other',
                'name': '《后浪》- bilibili',
                link: 'https://www.bilibili.com/video/BV1FV411d7u7',
                img: 'images/works/video.svg'
            },
            {
                'type': 'music',
                'name': 'My Love - 李承哲',
                link: 'https://www.bilibili.com/video/BV1hW411A7uw',
                img: 'images/works/music.svg'
            },
            {
                'type': 'music',
                'name': '国王和乞丐 - 华晨宇/杨宗纬',
                link: 'https://www.bilibili.com/video/BV1ut411S7PY',
                img: 'images/works/music.svg'
            },
            {
                'type': 'music',
                'name': '你就不要想起我 - 张杰',
                link: 'https://www.bilibili.com/video/BV16x411a7hj',
                img: 'images/works/music.svg'
            },
            {
                'type': 'music',
                'name': '明日へ - MISIA',
                link: 'https://www.bilibili.com/video/BV1Xt4y1m7D9',
                img: 'images/works/music.svg'
            },
        ]
    },
    methods: {
        getTopList: function (num) {
            this.items = this.videos.slice(0, num);
        }
    }
});

let flink = new Vue({
    el: '#flink',
    data: {
        sharedState: store,
        skills: [
            'images/client-1.svg',
            'images/client-9.svg',
            'images/client-2.svg',
            'images/client-3.svg',
            'images/client-4.svg',
            'images/client-6.svg',
            'images/client-7.svg',
            'images/client-8.svg',
        ],
        links: [
            {
                avatar: 'images/avatar-2.svg',
                link: 'https://kubernetes.feisky.xyz/',
                name: 'feisky',
                subtitle: 'Kubernetes指南',
                subtext: '在云计算、SDN 网络和容器编排调度等领域具有多年实践经验。'
            },
            {
                avatar: 'images/avatar-2.svg',
                link: 'https://lafish.fun/',
                name: 'Lafish的部落格',
                subtitle: '记录某小白的一旬成长',
                subtext: '在这里记录一下我的大学学习心得，算是一个学习技术生活向的博客。 '
            },
            {
                avatar: 'images/avatar-2.svg',
                link: 'https://crj0b.com/',
                name: 'Crj0b\'s Blog',
                subtitle: '生活,就是生下来,活下去。 ',
                subtext: 'This is a blog that shares the growth of personal technology learning.',
            },
            {
                avatar: 'images/avatar-3.svg',
                link: 'https://blog.itjoker.cn/',
                name: 'ITJoker',
                subtitle: '记录日常？摸鱼代码？随缘弹琴？',
                subtext: 'Be brave no matter what your life is like to you. '
            },
            {
                avatar: 'images/avatar-2.svg',
                link: 'https://blog.pangao.vip/',
                name: '潘高的小站',
                subtitle: 'IT套路深，必须瞎折腾',
                subtext: '选择了破解生命密码的专业，奈何对计算机情有独钟。'
            },
        ]
    },
    computed: {
        defaultAvatar() {
            return "this.src='images/avatar-3.svg'";
        }
    }
});


let map = new Vue({
    el: '#map',
    data: {
        // https://lbs.amap.com/console/show/card
        // 1080*500,1080*460(max)高德限制
        // https://www.google.com/maps google分享
        // http://api.map.baidu.com/lbsapi/createmap/index.html 百度地图
        src: 'https://surl.amap.com/mQc9sFTG2U9',
    }
});
