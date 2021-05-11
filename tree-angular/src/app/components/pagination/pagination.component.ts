import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent implements OnInit {

  @Input() changePageFunction: (args: number) => void;
  @Input() totalPages: number;
  @Input() currentPage: number;

  constructor() { }

  ngOnInit(): void {
    this.pagination(this.totalPages, this.currentPage);
  }

  pagination(totalPages: number, page: number): void {
    const ulTag = document.querySelector('.pagination ul');
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if (page > 1) {
      liTag += `<li class="btn" id="btn-prev"><span><i class="fas fa-angle-left"></i></span></li>`
    }

    if (page > 2) {
      liTag += `<li class="numb" id="first-index"><span>1</span></li>`
      if (page > 3) {
        liTag += `<li class="dots"><span>...</span></li>`
      }
    }

    if (totalPages > 5) {
      if (page == totalPages) {
        beforePages = beforePages - 2;
      } else if (page == totalPages - 1) {
        beforePages = beforePages - 1;
      }

      if (page == 1) {
        afterPages = afterPages + 2;
      } else if (page == 2) {
        afterPages = afterPages + 1;
      }
    }

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
      if (pageLength > totalPages) {
        continue;
      }
      if (pageLength == 0) {
        pageLength = pageLength + 1;
      }
      if (page == pageLength) {
        activeLi = "actived";
      }
      else {
        activeLi = "";
      }
      liTag += `<li class="numb ${activeLi}" id="btn-${pageLength}"><span>${pageLength}</span></li>`
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        liTag += `<li class="dots"><span>...</span></li>`
      }
      liTag += `<li class="numb" id="last-index"><span>${totalPages}</span></li>`
    }

    if (page < totalPages) {
      liTag += `<li class="btn" id="btn-next"><span><i class="fas fa-angle-right"></i></span></li>`
    }
    ulTag.innerHTML = liTag;
    if(document.getElementById("btn-prev")) document.getElementById("btn-prev").addEventListener('click', () => {
      this.changePageFunction(page - 1);
      this.pagination(totalPages, page - 1);
    });

    if (document.getElementById("first-index")) document.getElementById("first-index").addEventListener('click', () => {
      this.changePageFunction(1);
      this.pagination(totalPages, 1)}
      );
    if (document.getElementById("last-index")) document.getElementById("last-index").addEventListener('click', () => {
      this.changePageFunction(totalPages);
      this.pagination(totalPages, totalPages);
    });

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
      if (document.getElementById(`btn-${pageLength}`)) document.getElementById(`btn-${pageLength}`).addEventListener('click', () => {
        this.changePageFunction(pageLength);
        this.pagination(totalPages, pageLength);
      });
    }

    if(document.getElementById("btn-next")) document.getElementById("btn-next").addEventListener('click', () => {
      this.changePageFunction(page + 1);
      this.pagination(totalPages, page + 1);
    });
  }
}
