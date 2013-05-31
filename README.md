Jekyll version of [MindTrack](https://github.com/jsilverMDX/MindTrack)'s webroot

Use the templating system like this:
```
<div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
```

For more info, google for Jekyll or check out https://github.com/mojombo/jekyll