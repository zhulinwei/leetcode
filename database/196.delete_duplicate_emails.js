/*
 * date: 2019-04-12
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/customers-who-never-order/
 *
 * Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.
 * 
 * +----+------------------+
 * | Id | Email            |
 * +----+------------------+
 * | 1  | john@example.com |
 * | 2  | bob@example.com  |
 * | 3  | john@example.com |
 * +----+------------------+
 * Id is the primary key column for this table.
 * For example, after running your query, the above Person table should have the following rows:
 * 
 * +----+------------------+
 * | Id | Email            |
 * +----+------------------+
 * | 1  | john@example.com |
 * | 2  | bob@example.com  |
 * +----+------------------+
 * Note:
 * 
 * Your output is the whole Person table after executing your sql. Use delete statement.
 */

/* 
 * 解法:找到多余emil的id，然后删除
 */

// 找到id
select p1.* from Person p1, Person p2 where p1.Email = p2.Email and p1.Id > p2.Id;
// 删除id
delete p1 from Person p1, Person p2 where p1.Email = p2.Email and p1.Id > p2.Id;
