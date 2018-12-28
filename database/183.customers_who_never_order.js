/*
 * date: 2018-12-28
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/customers-who-never-order/
 *
 * Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.
 * Table: Customers.
 * +----+-------+
 * | Id | Name  |
 * +----+-------+
 * | 1  | Joe   |
 * | 2  | Henry |
 * | 3  | Sam   |
 * | 4  | Max   |
 * +----+-------+
 * Table: Orders. 
 * +----+------------+
 * | Id | CustomerId |
 * +----+------------+
 * | 1  | 3          |
 * | 2  | 1          |
 * +----+------------+
 * Using the above tables as example, return the following:
 * +-----------+
 * | Customers |
 * +-----------+
 * | Henry     |
 * | Max       |
 * +-----------+
 */

/* 
 * 解法一：customers 左并入 orders表中
 */

select Name as Customers from Customers customers left join Orders orders on customers.Id = orders.CustomerId where orders.CustomerId is Null;

/*
 * 解法二：直接使用not in
 */
select Name as Customers from Customers customers where customers.Id not in (select CustomerId from Orders);
