import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
  
public Produtos: Produto[] = [];
//produtos: any;
constructor(private _produtoService: ProdutoService, private _router: Router,
    private _loginService: LoginService) { }

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostranenu(false);
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe(
      retornaProduto => {
        this.Produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }

excluir(id:number) {
  this._produtoService.removerProduto(id).subscribe(
    produto => { 
      this.listarProdutos();
    },
    err => {
      alert("Erro ao excluir")
    }
  );

this._router.navigate(["/restrito/lista"]);

}  

}
