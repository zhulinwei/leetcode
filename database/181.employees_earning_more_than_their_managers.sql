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
SELECT employee1.Name AS Employee FROM Employee employee1 LEFT JOIN Employee employee2 ON employee1.ManagerId = employee2.Id WHERE employee1.Salary > employee2.Salary;

/*
 * 解法二：使用where 和 and
 */
SELECT employee1.Name AS Employee FROM Employee employee1, Employee employee2 WHERE employee1.ManagerId = employee2.Id AND employee1.Salary > employee2.Salary;

