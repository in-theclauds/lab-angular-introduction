import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array <any> = [
    {title: 'woo yeah!', content: 'YEAH, GIRL!' },
    {title: 'time flies', content: 'No pares, sigue sigue'},
    {title: 'you suck', content: 'lol jk'}
  ]

    newComment = { title: '', content: '' }
  ;

  addNew(): void {
    const newOne = { title: this.newComment.title, content: this.newComment.content }
    this.comments.push(newOne);
  }

  // createNewComment(titleArg: String, contentArg: String): void {
  //   const newComment = { title: titleArg, content: contentArg }
  //   this.comments.push(newComment);
  // }

  constructor() { }

  ngOnInit() {
  }

}
