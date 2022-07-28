# Storage

TODO
<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage>
<https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers>
<https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API>
<https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker>
<https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API>

## cookie

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies>

## WebStorage

与域名绑定，不同域名间数据不互通。

* sessionStorage 会话阶段，关闭所有连接存储失效
* localStorage 本地存储，除非手动清除，否则一直生效
  * getItem(key);
  * setItem(key, value);
  * removeItem(key);

## IndexedDB

不仅可以存储字符串，文件甚至视频都可以保存。

TODO

<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_complex_data_%E2%80%94_indexeddb>
<https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API>

## Service workers, Cache API

<https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API>

<https://developer.mozilla.org/en-US/docs/Web/API/Cache>

<https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/>
<https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline>
