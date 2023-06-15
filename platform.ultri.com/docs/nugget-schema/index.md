# Ultri Nugget Schema

## The Building Blocks

### Members

Members are humans as identifed by an email address. They can belong to multiple oragnizations in multiple accounts.

### Accounts

Accounts represent billable entities. All records and data ownership is account based, not member based.

### Organizations

An account can have multiple organizations, they are all billed to the account. 

### Logbook

A logbook stores records the events within an organization. Those records can be simple text notes, or complex data object using linked nuggets.

### Nugget

A nugget is a discreet piece of information. Think of it as a generalized wrapper that can hold data of any size and shape. By using a common format for data we can easily attach common elements like comments, reactions (likes) and file assests to any nugget of data in the system. Nuggets can be interlinked to support complex structures.

Nuggets always have a `nugget_type` that defines their structure and rules within an organization, the types are predefined by the platform. They also have a `subtype` that is a freeform 32 char column the developer ana use as needed, or not at all.

### Comment

A comment is a top level response by  a member to a nugget of information. It can be simple text or use a linked nugget to represent more complex data. Replies to top level comments are stored separately in the `reply` table for performance reasons.

### Reply 

A reponse to a comment is stored a as a reply. Replies can be nested to support as many levels as needed.

## Database

### Standard Columns

#### id

Tables use a bigint serial column to store the `id` for relationships. Nothing outside of the datbase should ever refence these.

#### uid

Tables store a `uuid` in the `uid` column as a unique identifier that can be referenced outside of the database.
* Tables use a timestamp column 

#### created_at

A `timestamp without time zone` field is used to store the time the record was `created_at`. This cannot be passed in, it will always be the database time.

#### updated_at

A `timestamp without time zone` field is used to store the time the record was `updated_at`. This cannot be passed in, it will always be the database time.

#### nugget_id

The `nugget_id`, or any `*_nugget_id`, column references a single nugget. This keeps logic simple and reuseable, multiple nuggets can be referenced by wrapping them in a nugget type meant to contain other nuggets.