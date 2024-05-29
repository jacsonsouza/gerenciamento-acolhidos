// partnerships.component.ts
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter/filter.service';
import { FilterComponent } from '../filter/filter.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-partnerships',
  standalone: true,
  imports: [CommonModule, FilterComponent], 
  templateUrl: './partnerships.component.html',
  styleUrl: './partnerships.component.css'
})
export class PartnershipsComponent implements OnInit {
  partners: { name: string; image: string }[] = [
    { name: 'Sebrae', image: 'https://paracooperativo.coop.br/fencoop/wp-content/uploads/2023/04/logo-sebrae-cor.png' },
    { name: 'Repsol', image: 'https://sumbilbao.com/wp-content/uploads/2021/02/repsol.jpg' },
    { name: 'Amazon', image: 'https://www.meioemensagem.com.br/wp-content/uploads/2023/03/Amazon-Ads-RGB-Squid-Ink-Large-copy.jpg' },
    { name: 'Santander', image: 'https://maquintex.com.br/wp-content/uploads/2022/08/santander-logo-pdf.jpg' },
    { name: 'Coca-Cola', image: 'https://sustainablebrandsmadrid.com/sb17/wp-content/uploads/2017/03/logo-coca-cola.png' },
    { name: 'Samsung', image: 'https://sustainablebrandsmadrid.com/sb17/wp-content/uploads/2017/03/Samsung-logo.png' },
    { name: 'Hyundai', image: 'https://img-estaticos.atleticodemadrid.com//system/fotosponsorbigs/152/medium/hyundai_1200_color.png?1537259566' },
    { name: 'Apple', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWEqjc8_OtGDcZ1A8p-d6Nv3vjDrQbBhDJSF4bXbK3MKd4mtZ6Vxj5XJuLAGTrHPAruE&usqp=CAU' },
    { name: 'Adidas', image: 'https://i2.wp.com/www.cdmensajero.es/wp-content/uploads/2019/08/Adidas-logo-e1566462201800.png?fit=1500%2C844&ssl=1' },
    { name: 'Disney', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw1-EG4Ozs2dhEq4iTK0aeRVuInvw1rDJbb6JjauLMg&s' },
    { name: 'Starbucks', image: 'https://blog.quantosobra.com.br/static/970d84601fb9a52bb1016188786bedc3/5fd6b/star.jpg' },
    { name: 'Walmart', image: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2013%2F09%2F18%2F23%2FWDL-Logo-31737_33419_054801853_1173429928.jpg' }
  ];
  
  filteredPartners: { name: string; image: string }[] = this.partners; // Cópia inicial

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.currentFilterOrder.subscribe(order => {
      this.filteredPartners = this.partners.sort((a, b) => {
        if (order === 'A-Z') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    });
  }
}
