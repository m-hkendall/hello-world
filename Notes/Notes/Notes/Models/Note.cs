using System;
using SQLite;

namespace Notes.Models
{
    //This class defines a Note model that will store data about each note in the application
    public class Note
    {
        //The ID property is marked with PrimaryKey and AutoIncrement attributes to ensure that each Note instance in the SQLite.NET database will have a unique ID provided by SQLite.NET.
        [PrimaryKey, AutoIncrement]
        public int ID { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
    }
}
