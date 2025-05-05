/*
  https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/submissions/1624973179/
*/
with 
ContactList as (
  select
    cont.[user_id], count(cont.[user_id]) as [contacts_cnt], 
    
    sum(
      case
        when cust.[email] = cont.[contact_email] then 1
        else 0
      end
    ) as [trusted_contacts_cnt] 
  from Contacts cont 
  left join Customers cust on cust.[email] = cont.[contact_email] 
  group by cont.[user_id] 
)

select 
  inv.[invoice_id], cust.[customer_name], inv.[price], 
  isnull(con.[contacts_cnt], 0) as [contacts_cnt], 
  isnull(con.[trusted_contacts_cnt], 0) as [trusted_contacts_cnt] 
from Invoices inv 
inner join Customers cust on cust.[customer_id] = inv.[user_id] 
left join ContactList con on con.[user_id] = inv.[user_id] 
order by inv.[invoice_id], cust.[customer_name] 