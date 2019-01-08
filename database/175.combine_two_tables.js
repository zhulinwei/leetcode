/*
 * date: 2018-12-19
 * author: Level.Z
 * source: https://leetcode-cn.com/problems/combine-two-tables/
 *
 * Table: Person
 * +-------------+---------+
 * | Column Name | Type    |
 * +-------------+---------+
 * | PersonId    | int     |
 * | FirstName   | varchar |
 * | LastName    | varchar |
 * +-------------+---------+
 * PersonId is the primary key column for this table.
 * Table: Address
 * 
 * +-------------+---------+
 * | Column Name | Type    |
 * +-------------+---------+
 * | AddressId   | int     |
 * | PersonId    | int     |
 * | City        | varchar |
 * | State       | varchar |
 * +-------------+---------+
 * AddressId is the primary key column for this table.
 *  
 * Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:
 * 
 * FirstName, LastName, City, State
 */

select person.FirstName, person.LastName, address.City, address.State from Person person left join Address address on person.PersonId = address.PersonId;
 
