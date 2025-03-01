import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-import-user',
  templateUrl: './import-user.component.html',
  styleUrls: ['./import-user.component.css']
})
export class ImportUserComponent implements OnInit {

  file: any = "";
  error_msg = false;
  file_required_label:any;
  fileName:any = '';

  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<ImportUserComponent>,
  ) { }

  form = new FormGroup({
    file: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    this.getLabels();
  }

  getLabels() {
    this.file_required_label = 'File is required';
  }

  async handleInputChange(e: any) {
    this.file = e.target.files[0];
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      this.fileName = file.name;
      console.log(file.type);
      if(file.type != 'text/csv' && file.type != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        this.error_msg = true;
        this.file_required_label = 'File accepted only excel/csv format';
      }
      else{
        this.error_msg = false;
        this.file_required_label = 'File is required';
      }
    }
  }

  submit() {
    const formdata = new FormData();
    if (this.file == "" || this.error_msg == true) {
      this.error_msg = true;
    } else {
      if (this.form.valid) {
        formdata.append("file", this.file);
        this.apiService.importUser(formdata).subscribe(
          (res: any) => {
            if (res.status == 200) {
              this.dialogRef.close(res);
            } else {
              alert("Something Went Wrong");
            }
          },
          (error) => {
            alert("Something Went Wrong");
          }
        );
      } //form valid
    }
  }

}
