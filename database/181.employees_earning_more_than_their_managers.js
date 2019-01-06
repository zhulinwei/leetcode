/*
 * date: 2018-12-28
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/employees-earning-more-than-their-managers/
 *
 * The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.
 * +----+-------+--------+-----------+
 * | Id | Name  | Salary | ManagerId |
 * +----+-------+--------+-----------+
 * | 1  | Joe   | 70000  | 3         |
 * | 2  | Henry | 80000  | 4         |
 * | 3  | Sam   | 60000  | NULL      |
 * | 4  | Max   | 90000  | NULL      |
 * +----+-------+--------+-----------+
 * Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.
 * 
 * +----------+
 * | Employee |
 * +----------+
 * | Joe      |
 * +----------+
 */

/*
 * 解法一：使用left join
 */
select employee1.Name as Employee from Employee employee1 left join Employee employee2 on employee1.ManagerId = employee2.Id where employee1.Salary > employee2.Salary;

/*
 * 解法二：使用where 和 and
 */
select employee1.Name as Employee from Employee employee1, Employee employee2 where employee1.ManagerId = employee2.Id and employee1.Salary > employee2.Salary;

