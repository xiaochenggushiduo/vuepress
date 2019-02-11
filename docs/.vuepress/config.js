module.exports = {
  title: 'R语言教程|余醉',
  description: '用以致学',
  base:'/myvuepress/',
  head: [
   ['link', { rel: 'icon', href: '/logo2.png' }]
 ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: 'post' },
      { text: '视频', link: 'https://google.com' },
      { text: '问答', link: '/QA/' },
    ],
    sidebar: {
      '/QA/': [
        '',     /* /foo/ */
        '判断缺失值',  /* /foo/one.html */
        
       ]
  
  }
}
}