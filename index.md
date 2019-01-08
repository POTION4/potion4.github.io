## Hark, visitor!

You traveled far and deep to my personal blog that I never spread. You are in luck: for I've created thousands of blogs on my own, and finally I'd decided to try out Jekyll. Maybe it's not that bad, after all. 

## 建设中 

很可惜，目前这里还在建设中。说真的，我已经很多次想过要写博客，但很多次不知道因为写什么，就没有下文了。我希望我可以写一下图形学什么的。祝我好运！

## 晚报

我大概会在晚上才更新。以下是最新的推：

<div>
  {% for post in site.posts limit:3 %}
    <a href="{{ post.url }}">
      <div style="float: left; width: 15%; padding: 0px px 0px 5px; margin: 10px; border-color: black; border-style: solid; border-width: 1px;">
        <h2>{{ post.title }}</h2>
        <small>{{ post.excerpt }}</small>
      </div>
    </a>
  {% endfor %} 
</div>
