using System;
using System.IO;
using Xamarin.Forms;
using Notes.Data;

namespace Notes
{
    //This code adds a namespace declaration for the System.IO namespace, and adds a declaration for a static FolderPath property of type string. The FolderPath property is used to store the path on the device where note data will be stored. In addition, the code initializes the FolderPath property in the App constructor, and initialized the MainPage property to be a NavigationPage that hosts an instance of the NotesPage.
    public partial class App : Application
    {
  
        static NoteDatabase database;
        //public static string FolderPath { get; private set; }

        //This code defines a Database property that creates a new NoteDatabase instance as a singleton, passing in a filename of the database as the argument to the NoteDatabase constructor. The advantage of exposing the database as a singleton is that a single database connection is created that's kept open while the application runs, therefore avoiding the expense of opening and closing the database file each time a database operation is performed.
        public static NoteDatabase Database
        {
            get
            {
                if(database == null)
                {
                    database = new NoteDatabase(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Notes.db3"));
                }
                return database;
            }
        }

        public App()
        {
            InitializeComponent();
            //FolderPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData));
            MainPage = new NavigationPage(new NotesPage());
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
