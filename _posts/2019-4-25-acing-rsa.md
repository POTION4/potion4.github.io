---
layout: post
title: Easy RSA
category: [ crypto ]
---

最近由于某些原因，我开始看单向加密的算法，也就是众所周知的 RSA 的原理了。所以今天，为了让我自个儿加深记忆，以及写一下东西，我决定把他写出来！

[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) 算法的全称是 __[Rivest](https://en.wikipedia.org/wiki/Ron_Rivest)-[Shamir](https://en.wikipedia.org/wiki/Adi_Shamir)-[Adleman](https://en.wikipedia.org/wiki/Leonard_Adleman)__ 。它就是由这三个人一起提出的。其实这个算法一点儿也不难！这三人贼几把牛逼，一会看看就知道为啥了……

## 开始！

假设有这么一双组合：(5, 14) ，我们把他叫做公钥。接下来我们要加密这个数字：__2__ 。于是我们这样做：

$$
  c = 2^5 mod 14 = 4
$$

其中 c 就是 Ciphered Text ，也就是加密过后的消息。可以看得出来，加密完成之后，c = 4，也就算是我们的加密已经完毕了。

## 解密！

接下来就是用私钥来解密他了。假设有这么一双组合：(11, 14) 。这就是咱们的私钥了。挺好，接下来我们解密一哈：

$$
  d = 4^{11} mod 14 = 2
$$

你看，这就解密好了。是不是贼简单？公钥加密的东西只能通过私钥解密，私钥加密的东西只能通公钥解密。有人可能要问了，__反正我公钥都是周围发放的，那我要这个来干啥？__ 他的作用很明显，就是假如这是你的公钥可以解密的东西，那么他 __必定是你发的__ 。因为唯一可以加密这个的东西，私钥，只在你的手里。所以私钥加密内容是要来验明正身的。

## 那么，这些🔑是怎么生成的呢？

也很简单！他们是从两个质数里挑出来的！我们把这俩质数记作 p 和 q。一般在 真正的 RSA 应用场景里面， __p 和 q 是非常大的__ 。但是其实上面为了参考，所以我把他们弄的很小，就是 __2__ 和 __7__ 。接下来可能有人马上可以发现了， $$ 2 \times 7 = 14 $$ ，因此很明显，这就是公钥和私钥后面的那个数字了。__我们先把这个数字记作 N__ 。

## 那公钥匙前面那个数字呢？

接下来，我就要给你们介绍神奇的 $$ \phi $$ 函数了：

看看我们的 __N__ 。看完了对不？接下来，设 X 取值范围为 $$ 1 <= X <= N $$  ，数有多少个 X 符合以下的条件：

1. 不能被 p 整除
2. 不能被 q 整除

在这个场景之下，就是看 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 之间有多少个数不能被 2 和 7 整除。首先由于 2 的存在，我们可以知道一切偶数都没戏了，再加上 7 可以被 7 整除，因此最后剩下的数字有:

 <b>1</b>, <s>2</s>, <b>3</b>, <s>4</s>, <b>5</b>, <s>6</s>, <s>7</s>, <s>8</s>, <b>9</b>, <s>10</s>, <b>11</b>, <s>12</s>, <b>13</b>, <s>14</s>
 
 __我们把这些数字叫做互质数，他们之间没有公因数。__ 。一共 6 个。所以 $$ \phi(2, 7) = 6 $$ ！
 
 但是这个时候又有人要问了，现在数字小还好，假如 p 和 q 很大呢？那岂不是数到天黑？
 
 这时候，我就要给你们引出真正的 $$ \phi $$ 函数啦！
 
 $$ \phi(p, q) = (p - 1) \times (q - 1) $$
 
可以发现，其实真正的 $$ \phi $$ 就等于 p - 1 乘上 q - 1！不信？ $$ (2 - 1) \times (7 - 1) $$ 等于多少？

拿到了 $$ \phi(p, q) $$ 之后，我们就可以正式的开始计算公钥前面的那个数字，也就是 __e__ 了。其实说是计算，还不如说是选择。__e__ 要符合以下条件：

1. &nbsp;$$ 1 < e < \phi(p, q) $$
2. __和 N, $$ \phi(p, q) $$ 互质。__

看回我们的那一堆数字，首先，$$ \phi(p, q) = 6 $$ ，因此比 6 大的全死：

 <b>1</b>, <s>2</s>, <b>3</b>, <s>4</s>, <b>5</b>, <s><s>6</s>, <s>7</s>, <s>8</s>, <b>9</b>, <s>10</s>, <b>11</b>, <s>12</s>, <b>13</b>, <s>14</s></s>

剩下了 1，3，5。我们永远也不会选择 1， 因为他本身的性质太特殊了，他可以是任何数的乘数或被乘数。于是就剩下了 3 和 5。我们选了 5。这就是我们的 (5, 14) 前面那一部分了。于是又有人要问了，为啥不选 3？[因为很明显，3 可以整除 $$ \phi(p, q) $$ 啊……看上面……](#MathJax-Element-13-Frame)

这就是我们公钥的选法了。完全不是巧合，就是这么挑出来的。

## 那么，私钥前面那一个呢？

这里就是精妙的地方了。我们假定这个东西叫做 d ，然后规定 d 要满足这么个条件。

$$ (d \times e) mod \phi(p, q) = 1 $$

也就是说， (d &times; 5) 取余 6 等于 1。因此很容易就可以算出来，$$ d = (5 \times (6 - 1)) \div 5 = 5 $$。 巧不巧？5 本身正好也是私钥。__这就是质数取太小的下场了__……所以其实在之前为了避免这个尴尬，我把 q 继续往上取了，变成了 11 。这就是 d 的由来了。

## 结语

精不精彩？今天说的其实不算是 RSA 的彻头彻尾的工作流程，只能说是他背后的原理。其实仔细看就会发现，RSA 是通过求余数来让本来的数据丢失，进而达到加密的目的的。并且也由于取余，很明显上述的公钥只能加密/解密 0~13 一共 14 个数字，可以说是极度弱鸡的钥匙。我大概知道还有不少算法都是通过这种方法来数据弄的面目全非的，但这个是真心🐂🍺！！

我其实还是不甚理解 RSA 的深层次原理。这个其实充其量只能算是一个笔记。RSA 的作用，作为不对称加密的曾经的大哥，是非常重要的。而且再这么说，今天的这些内容其实提取自一个 [视频](https://www.youtube.com/watch?v=oOcTVTpUsPQ)……

在最后的最后，我给你们这么一个用上述公钥加密的数字：__8__ 。快来解密一下，看看原来的数字是多少吧！