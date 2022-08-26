import { Router } from "express";
import { ProdutoETagController } from "../ProdutoETagController";

export const produtoETagRouter = Router()

const produtoETag = new ProdutoETagController()

produtoETagRouter.post("/criarprodutotag", produtoETag.criarProdutoETagController)