![alt text](https://raw.githubusercontent.com/ericrohlfs/oystertoad/master/images/oyster_toad.png)

# OysterToad

Are you an ASP.NET WebForms developer?

Are you being asked to upgrade to ASP.NET Core or a more 'popular' front end framework like Angular, React, Vue, or Polymer?

Don't throw all that experience and legacy code away!  

Before you re-write, migrate using OysterToad the drop in lightweight polyfill for WebForms.  

With OysterToad asp tags now render as client side components instead of server side components. 

## Migrate in two and a half simple steps 

* Add .html to the end of your .aspx filename.

* Add Vue and Oyster links to the bottom of your .aspx.html page.

```
 </html>
 <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js" type="text/javascript"></script>
 <script src="https://rawgit.com/EricRohlfs/OysterToad/master/src/oystertoad.js" type="text/javascript"></script>
```

* Debug any potential issues

## Items of Interest

* [Supported tags](src/oystertoad.js)
* [Examples](examples/readme.md)


## Project Name

Fisherman of the Chesapeakbay believe catching an oystertoad a sign of good luck and if you are using this project you need some luck.

## Contributors Wanted

Contributors are wanted to add support for more tags.
Please ensure added tags render the same as they do in WebFroms.
