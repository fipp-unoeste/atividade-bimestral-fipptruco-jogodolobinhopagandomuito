import BaseEntity from "./baseEntity.js";

export default class MaoEntity extends BaseEntity {
  #id;
  #ordem;
  #codigoBaralho;
  #trucada;
  #valor;
  #jogoId;
  #equipeVencedora;

  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }

  get ordem() {
    return this.#ordem;
  }
  set ordem(value) {
    this.#ordem = value;
  }

  get codigoBaralho() {
    return this.#codigoBaralho;
  }
  set codigoBaralho(value) {
    this.#codigoBaralho = value;
  }

  get trucada() {
    return this.#trucada;
  }
  set trucada(value) {
    this.#trucada = value;
  }

  get valor() {
    return this.#valor;
  }
  set valor(value) {
    this.#valor = value;
  }

  get jogoId() {
    return this.#jogoId;
  }
  set jogoId(value) {
    this.#jogoId = value;
  }

  get equipeVencedora() {
    return this.#equipeVencedora;
  }
  set equipeVencedora(value) {
    this.#equipeVencedora = value;
  }

  constructor(
    id,
    ordem,
    codigoBaralho,
    trucada,
    valor,
    jogoId,
    equipeVencedora
  ) {
    super();
    this.#id = id;
    this.#ordem = ordem;
    this.#codigoBaralho = codigoBaralho;
    this.#trucada = trucada;
    this.#valor = valor;
    this.#jogoId = jogoId;
    this.#equipeVencedora = equipeVencedora;
  }
}
