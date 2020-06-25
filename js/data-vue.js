/**
 * 数据绑定
 * @type {Vue}
 */

let home = new Vue({
    el: '#home',
    data: {
        name: 'saowu',
        qq: '786021717',
        wechart: "images/wxqrcode.png",
        github: "https://github.com/saowu",
        blog: "blog/",
        mail: 'saowu.gan@qq.com'
    }
});

let about = new Vue({
    el: '#about',
    data: {
        skills: [
            {key: 'Java', val: 75, color: '#FFD15C'},
            {key: 'Python', val: 50, color: '#FF4C60'},
            {key: 'Linux', val: 40, color: '#6C6CE5'},
        ],
        description: '从2016年到如今的技术积累过程中，不断的入门，又不断的放弃，隔天再忿忿的捡起。在这个光怪陆离的世界中，依旧还是个不起眼的菜鸟，希望以后能保持平常心，继续坚持学习，迎接未来！！！',
        cv: 'cv/cv.html',
        statistics: [
            {key: 'Started', val: 2016, icon: 'icon-fire'},
            {key: 'Repositories', val: 23, icon: 'icon-social-github'},
            {key: 'Music', val: 4027, icon: 'icon-music-tone-alt'},
            {key: 'Articles', val: 31, icon: 'icon-book-open'},
        ],
    }
});

let experience = new Vue({
    el: '#experience',
    data: {
        edu: [
            {time: '2019 - Present', title: '大学本科', text: '目前就读于山东交通学院，计算机科学与技术专业。继续学习...'},
            {time: '2019 - 2016', title: '大学专科', text: '就读于山东电子职业技术学院，软件技术专业。曾获得第十五届山东省大学生软件设计大赛二等奖。'},
            {time: '2004 - 2016', title: '义务教育', text: '文明礼貌、敬老爱幼、保护环境、讲究卫生、遵纪守法、勤恳敬业、助人为乐、见义勇为、诚实守信、正直向上。'},
        ],
        exp: [
            {
                time: '2019 - Present',
                title: 'Java Developer',
                text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            },
            {
                time: '2017 - 2018',
                title: 'Python Developer',
                text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            },
            {
                time: '2016 - 2017',
                title: 'Front-End Developer',
                text: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            },
        ],
        loading: 0.2,
    }
});

let blog = new Vue({
    el: '#blog',
    data: {
        posts: [
            {
                category: 'Python',
                category_link: 'blog/mVqrRKBAz/',
                title: 'FigureBed图床系统',
                create: '2020-04-03',
                link: 'blog/IVwOk1Phb/',
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
                category: 'Java',
                category_link: 'blog/FWHSehn5o/',
                title: 'Dataway接口配置工具',
                create: '2020-06-17',
                link: 'blog/dzBUfOA4S/',
                img: 'images/blog/3.svg'
            },

        ],
        creative: 'saowu',
        blog_link: 'blog/'
    }
});

let services = new Vue({
    el: '#services',
    data: {
        services: [
            {
                title: 'Java Development',
                text: '能熟练使用Java，了解JVM原理。并熟练使用Spring、Mybatis、SpringBoot、Netty等常用框架。',
                img: 'images/service-java.svg',
                color: '#6C6CE5',
                css: 'text-light shadow-blue',
            },
            {
                title: 'Front-end Development',
                text: '能熟练使用Photoshop、Bootstrap、jQuery、Vue独立完成普遍的前端开发。',
                img: 'images/service-2.svg',
                color: '#F9D74C',
                css: 'shadow-yellow',
            },
            {
                title: 'Python development',
                text: '能熟练掌握Python，完成一些简单的爬虫脚本，以及利用Flask、Django搭建后台服务等。',
                img: 'images/service-python.svg',
                color: '#F97B8B',
                css: 'text-light shadow-pink',
            },
        ]
    }
});

let video = new Vue({
    el: '#video',
    data: {
        size: 6,
        videos: [
            {
                'type': 'knowledge',
                'name': '最新Vue教程',
                link: 'https://www.bilibili.com/video/BV15741177Eh',
                img: 'images/works/knowledge.svg'
            },
            {
                'type': 'game',
                'name': '英雄联盟季中杯-FPXvsTES',
                link: 'https://www.bilibili.com/video/BV1ik4y167vJ',
                img: 'images/works/lol.svg'
            },
            {
                'type': 'other',
                'name': 'WWDC2020-Apple',
                link: 'https://www.bilibili.com/video/BV1Sz411i7Za',
                img: 'images/works/apple.svg'
            },
            {
                'type': 'music',
                'name': '后来 - 刘若英',
                link: 'https://www.bilibili.com/video/BV1UK411V7TL',
                img: 'images/works/music.svg'
            },
            {
                'type': 'other',
                'name': '《后浪》- bilibili',
                link: 'https://www.bilibili.com/video/BV1FV411d7u7',
                img: 'images/works/bilibili.svg'
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
        skills: [
            'images/client-1.svg',
            'images/client-2.svg',
            'images/client-3.svg',
            'images/client-4.svg',
            'images/client-5.svg',
            'images/client-6.svg',
            'images/client-7.svg',
            'images/client-8.svg',
        ],
        links: [
            {
                logo: 'images/avatar-3.svg',
                link: 'http://alex.hardcreate.cn/blog/index/',
                name: 'ALEX',
                subtitle: '欢迎阁下访问我的博客',
                subtext: '有相同的兴趣的朋友可以联系我一起探讨，对于其中有任何问题请与我联系。'
            },
            {
                logo: 'https://lafish.fun/images/avatar.png',
                link: 'https://lafish.fun/',
                name: 'Lafish的部落格',
                subtitle: '记录某小白的一旬成长',
                subtext: '在这里记录一下我的大学学习心得，算是一个学习技术生活向的博客。 '
            },
            {
                logo: 'https://cdn.jsdelivr.net/gh/XXXZhy/Blog_Image/images/%E5%A4%B4%E5%83%8F.png',
                link: 'https://www.xxxzhy.com/',
                name: 'XXXZhy',
                subtitle: 'Better late than never.',
                subtext: '人生就像一盒巧克力，你永远不知道下一颗是什么味道。'
            },
            {
                logo: 'https://crj0b.com/img/logo.png',
                link: 'https://crj0b.com/',
                name: 'Crj0b\'s Blog',
                subtitle: '生活,就是生下来,活下去。 ',
                subtext: 'This is a blog that shares the growth of personal technology learning.',
            },
            {
                logo: 'images/avatar-3.svg',
                link: 'https://blog.itjoker.cn/',
                name: 'ITJoker',
                subtitle: '记录日常？摸鱼代码？随缘弹琴？',
                subtext: 'Be brave no matter what your life is like to you. '
            },
            {
                logo: 'https://blog.pangao.vip/images/avatar.jpg',
                link: 'https://blog.pangao.vip/',
                name: '潘高的小站',
                subtitle: 'IT套路深，必须瞎折腾',
                subtext: '选择了破解生命密码的专业，奈何对计算机情有独钟。'
            },
        ]
    }
});