using System;
using System.IO;
using Xamarin.Forms;
using Notes.Models;

namespace Notes
{
    //This code stores a Note instance, which represents a single note, in the BindingContext of the page.
    public partial class NoteEntryPage : ContentPage
    {
        public NoteEntryPage()
        {
            InitializeComponent();
        }

        //When the Save button is pressed, the OnSaveButtonClicked event handler is executed, which either saves the content of the Editor to a new file with a randomly generated file name, or to an existing file if a note is being updated. In both cases, the file is stored in the local application data folder for the application. Then the method navigates back to the previous page.
        async void OnSaveButtonClicked(object sender, EventArgs e)
        {
            //var note = (Note)BindingContext;

            //if(string.IsNullOrWhiteSpace(note.Filename))
            //{
            //    //Save
            //    var filename = Path.Combine(App.FolderPath, $"{Path.GetRandomFileName()}.notes.txt");
            //    File.WriteAllText(filename, note.Text);
            //}
            //else
            //{
            //    //Update
            //    File.WriteAllText(note.Filename, note.Text);
            //}
            //await Navigation.PopAsync();


            //When the OnSaveButtonClicked event handler is executed, the Note instance is saved to the database and the application navigates back to the previous page.
            var note = (Note)BindingContext;
            note.Date = DateTime.UtcNow;
            await App.Database.SaveNoteAsync(note);
            await Navigation.PopAsync();
        }

        //When the Delete button is pressed the OnDeleteButtonClicked event handler is executed, which deletes the file provided that it exists and navigated back to the previous page.
        async void OnDeleteButtonClicked(object sender, EventArgs e)
        {
            //var note = (Note)BindingContext;

            //if(File.Exists(note.Filename))
            //{
            //    File.Delete(note.Filename);
            //}
            //await Navigation.PopAsync();

            //When the OnDeleteButtonClicked event handler is executed, the Note instance is deleted from the database and the application navigates back to the previous page.
            var note = (Note)BindingContext;
            await App.Database.DeleteNoteAsync(note);
            await Navigation.PopAsync();
        }
    }
}