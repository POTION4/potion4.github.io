---
title: Frame of 42yeah
---

## Hark, visitor!

说真的，我也不知道你怎么找得到这里的，我都没告诉过别的人。但是总之，你在跋山涉水这么久之后，终于来到了 [42yeah](https://github.com/POTION4) 的个人博客这里了！！说真的，我写过无数个博客框架了。。。但我最后！！还是选择了 `Jekyll` ，这就是明显的让步了。

<div class="paperi floats stick">
  <h2>所有分类</h2>
  <div>
    {% assign first = true %}
    {% for category in site.categories %}
      {% if first %}
        {% assign first = false %}
      {% else %}
        ，
      {% endif %}
      <span style="padding-left: 10px; padding-right: 10px;">
        <a href="/category/{{ category | first }}">{{ category | first }}</a>
      </span>
    {% endfor %}
  </div>
</div>

## 晚报

我大概会在晚上才更新。以下是最新的推：

<div style="display: flex; justify-items: between; align-items: center; overflow-x: auto; padding: 2.5rem;">
  {% for post in site.posts limit:5 %}
    <a href="{{ post.url }}">
      <div style="padding: 0px px 0px 5px; margin-left: -1.5rem; border-color: black; border-style: solid; border-width: 1px; max-width: 200px;" class="card">
        <h2>{{ post.title }}</h2>
        <p style="padding: 0.25rem;">
          <small>{{ post.excerpt }}</small>
        </p>
      </div>
    </a>
  {% endfor %}
  <div style="padding: 0px px 0px 5px; margin-left: -1.5rem; border-color: black; border-style: dashed; border-width: 2px; max-width: 200px;" class="card">
    <h2 style="color: #555;">还有很多……</h2>
    <p style="padding: 0.25rem; color: #555;">
      <small>前往相应的分类看吧！</small>
    </p>
  </div>
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
  <a href="http://www.moonsekai.xyz">
    <div style="padding: 5px; margin: 10px; border-color: black; border-style: solid; border-width: 1px; color: green; background-color: white;">
      <h2>moonmagian</h2>
      <small>It's been a long time. <sub>注: 2018-2-4，我更新了 moon 的博客传送门（他终于有域名了），之前的我就不链了……</sub></small>
    </div>
  </a>
  <a href="https://gamejilu.com">
    <div style="padding: 5px; margin: 10px; border-color: black; border-style: solid; border-width: 1px; color: green; background-color: white;">
      <h2>gamejilu</h2>
      <small>脆饼的博客。他说要更好地體驗遊戲的樂趣！</small>
    </div>
  </a>
</div>
