using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Xamarin.Forms;
using Notes.Models;

namespace Notes
{
    //This code defines the functionality of the NotesPage.
    public partial class NotesPage : ContentPage
    {
        public NotesPage()
        {
            InitializeComponent();
        }

        //When the page appears, the OnAppearing method is executed, which populates the ListView with any notes that have been retrieved from the local application data folder.
        //protected override void OnAppearing()
        //{
        //    base.OnAppearing();

        //    var notes = new List<Note>();

        //    var files = Directory.EnumerateFiles(App.FolderPath, "*.notes.txt");
        //    foreach(var filename in files)
        //    {
        //        notes.Add(new Note
        //        {
        //            Filename = filename,
        //            Text = File.ReadAllText(filename),
        //            Date = File.GetCreationTime(filename)
        //        });
        //    }
        //    listView.ItemsSource = notes.OrderBy(d => d.Date).ToList();
        //}

        //This code populates the ListView with any notes stored in the database.
        protected override async void OnAppearing()
        {
            base.OnAppearing();

            listView.ItemsSource = await App.Database.GetNotesAsync();
        }

        //When the ToolbarItem is pressed the OnNoteAddedClicked event handler is executed. This method navigated to the NoteEntryPage, setting the BindingContext of the NoteEntryPage to a new Note instance.
        async void OnNoteAddedClicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new NoteEntryPage
            {
                BindingContext = new Note()
            });
        }

        //When an item in the ListView is selected the OnListViewItemSelected event handler is executed. This method navigated to the NoteEntryPage, setting the BindingContext of the NoteEntryPage to the selectedNote instance.
        async void OnListViewItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            if(e.SelectedItem != null)
            {
                await Navigation.PushAsync(new NoteEntryPage
                {
                    BindingContext = e.SelectedItem as Note
                });
            }
        }
    }
}