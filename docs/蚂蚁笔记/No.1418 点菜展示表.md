原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc1418](http://blog.leanot
e.com/post/dawnmagnet/lc1418)
# 题目
<p>给你一个数组 <code>orders</code>，表示客户在餐厅中完成的订单，确切地说， 
<code>orders[i]=[customerName<sub>i</sub>,tableNumber<sub>i</sub>,foodItem<sub>i</sub>]</code> ，其中 <code>customerName<sub>i</sub></code> 
是客户的姓名，<code>tableNumber<sub>i</sub></code> 是客户所在餐桌的桌号，而 
<code>foodItem<sub>i</sub></code> 是客户点的餐品名称。</p>
<p>请你返回该餐厅的 <strong>点菜展示表</strong><em> 
。</em>在这张表中，表中第一行为标题，其第一列为餐桌桌号 “Table” 
，后面每一列都是按字母顺序排列的餐品名称。接下来每一行中的项则表示每张餐桌订
购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。</p>
<p>注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序
排列。</p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><strong>输入：</strong>orders = 
[["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried 
Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"
]]
<strong>输出：</strong>[["Table","Beef Burrito","Ceviche","Fried 
Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","
0","0"]] 
<strong>解释：
</strong>点菜展示表如下所示：
<strong>Table,Beef Burrito,Ceviche,Fried Chicken,Water</strong>
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
对于餐桌 3：David 点了 "Ceviche" 和 "Fried Chicken"，而 Rous 点了 "Ceviche"
而餐桌 5：Carla 点了 "Water" 和 "Ceviche"
餐桌 10：Corina 点了 "Beef Burrito" 
</pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>orders = [["James","12","Fried 
Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried 
Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]
<strong>输出：</strong>[["Table","Canadian Waffles","Fried 
Chicken"],["1","2","0"],["12","0","3"]] 
<strong>解释：</strong>
对于餐桌 1：Adam 和 Brianna 都点了 "Canadian Waffles"
而餐桌 12：James, Ratesh 和 Amadeus 都点了 "Fried Chicken"
</pre>
