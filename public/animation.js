const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up-fade-in');
      observer.unobserve(entry.target); // 确保动画只播放一次
    }
  });
}, {
  threshold: 0.1 // 当目标元素有10%进入视口时触发
});

// 监测所有需要动画的元素
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});