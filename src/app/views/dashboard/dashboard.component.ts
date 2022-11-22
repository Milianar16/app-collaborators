import { Collaborator } from './../../models/collaborator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [
    {
      nome: "Maria Miliana",
      email: "mili1212@gmail.com",
      cpf: "000.000.000-00",
      cargo: "Desenvolvedora",
      setor: "Tech",
      estado: "RN",
      cidade: "Natal",
      remuneracao:100000,
      dataNascimento: new Date(),
      fotoUrl: "https://avatars.githubusercontent.com/u/113555082?v=4"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}