/*
 * date: 2018-12-19
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/second-highest-salary/
 *
 * Write a SQL query to get the second highest salary from the Employee table.
 * +----+--------+
 * | Id | Salary |
 * +----+--------+
 * | 1  | 100    |
 * | 2  | 200    |
 * | 3  | 300    |
 * +----+--------+
 * For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.
 * +---------------------+
 * | SecondHighestSalary |
 * +---------------------+
 * | 200                 |
 * +---------------------+
 */

/*
 * 如果直接：select distinct Salary as SecondHighestSalary from Employee order by Salary desc limit 1, 1;将无法满足“没有第二高薪时返回null”的要求，故我们需要包装一下
 */

// MySQL 语法
select (select distinct Salary from Employee order by Salary desc limit 1, 1) as SecondHighestSalary;

