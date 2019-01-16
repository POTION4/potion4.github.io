---
title: Frame of 42yeah
---

<div class="paperi">
## 所有分类
<div style="display: flex; justify-items: between; align-items: center; width: 100%; overflow-x: auto;">
  {% assign first = true %}
  {% for category in site.categories %}
    {% if first %}
      {% assign first = false %}
    {% else %}
      <div>|</div>
    {% endif %}
    <div style="padding-left: 10px; padding-right: 10px;">
      <a href="javascript:void()">{{ category | first }}</a>
    </div>
  {% endfor %}
</div>

## Hark, visitor!

说真的，我也不知道你怎么找得到这里的，我都没告诉过别的人。但是总之，你在跋山涉水这么久之后，终于来到了 [42yeah](https://github.com/POTION4) 的个人博客这里了！！说真的，我写过无数个博客框架了。。。但我最后！！还是选择了 `Jekyll` ，这就是明显的让步了。

## 建设中

很可惜，目前这里还在建设中。说真的，我已经很多次想过要写博客，但很多次不知道因为写什么，就没有下文了。我希望我可以写一下图形学什么的。祝我好运！

## 晚报

我大概会在晚上才更新。以下是最新的推：

<div style="display: flex; justify-items: between; align-items: center; overflow-x: auto; padding: 2.5rem;">
  {% for post in site.posts limit:10 %}
    <a href="{{ post.url }}">
      <div style="padding: 0px px 0px 5px; margin-left: -1.5rem; border-color: black; border-style: solid; border-width: 1px; max-width: 200px;" class="card">
        <h2>{{ post.title }}</h2>
        <p style="padding: 0.25rem;">
          <small>{{ post.excerpt }}</small>
        </p>
      </div>
    </a>
  {% endfor %}
</div>

## 友情

以下的链接包括了友情链接链接:

<div style="display: flex; justify-items: between; align-items: center; overflow-x: auto;">
  <a href="https://zzkdev.github.io">
    <div style="padding: 5px; margin: 10px; border-color: black; border-style: solid; border-width: 1px; color: green; background-color: white;">
      <h2>杀不死的坏蛋</h2>
      <small>父子关系，我是父</small>
    </div>
  </a>
  <a href="http://122.114.233.64">
    <div style="padding: 5px; margin: 10px; border-color: black; border-style: solid; border-width: 1px; color: green; background-color: white;">
      <h2>moonmagian</h2>
      <small>It's been a long time.</small>
    </div>
  </a>
  <a href="https://gamejilu.com">
    <div style="padding: 5px; margin: 10px; border-color: black; border-style: solid; border-width: 1px; color: green; background-color: white;">
      <h2>gamejilu</h2>
      <small>脆饼的博客。他说要更好地體驗遊戲的樂趣！</small>
    </div>
  </a>
</div>
