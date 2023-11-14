#include <cstdio>
#include <cstdlib>
#include <fstream>

typedef struct Hashmap
{
  char* id;
  struct Hashtable *tabela;
  struct Hashmap *proximo;
  struct Hashmap *anterior;
} hashmap;

typedef struct Hashtable 
{ 
  int tamanho;
  struct Lista_Dbl_Encadeada *tabela;
} hashtable;

typedef struct Lista_Dbl_Encadeada
{ 
  int tamanho;
  struct Node *inicio;
  struct Node *fim;
} lista_dbl_encadeada;

typedef struct Node 
{
  int id;
  double valor;
  struct Node *proximo;
  struct Node *anterior;
} node;

lista_dbl_encadeada* cria_lista_dbl_encadeada() 
{

  lista_dbl_encadeada* novo = (lista_dbl_encadeada*) malloc(sizeof(lista_dbl_encadeada));
  return novo;

}

hashtable* cria_hashtable()
{

  hashtable* novo = (hashtable*) malloc(sizeof(hashtable));
  return novo;

}

hashmap* cria_hashmap()
{

  hashmap* novo = (hashmap*) malloc(sizeof(hashmap));
  return novo;

}

node* cria_node()
{

  node* novo = (node*) malloc(sizeof(node));
  return novo;

}

void adiciona_inicio_lista(lista_dbl_encadeada* l, double x) { 

  if(l->inicio=NULL) 
  {
    node* novo = cria_node();
    novo->valor = x;
    novo->proximo = NULL;
    novo->anterior = NULL;
    l->inicio = novo;
    l->fim = novo;
    l->tamanho++;
  }
  else
  {
    node* novo = cria_node();
    novo->valor = x;
    novo->proximo = NULL;
    novo->anterior = l->inicio;
    l->tamanho++;
  }

}

void adiciona_final_lista(lista_dbl_encadeada* l, double x) { 

  if(l->inicio==NULL) 
  {
    node* novo = cria_node();
    novo->valor = x;
    novo->proximo = NULL;
    novo->anterior = NULL;
    l->inicio = novo;
    l->fim = novo;
    l->tamanho++;
  }
  else
  {
    node* novo = cria_node();
    novo->valor = x;
    novo->proximo = l->fim;
    novo->anterior = NULL;
    l->tamanho++;
  }

}

void remove_item_lista(lista_dbl_encadeada* l, double x) { 

  node* aux;
  aux = l->inicio;
  while(aux!=NULL)
  {
    if(aux->valor == x)
    {
      aux->anterior->proximo = aux->proximo;
      aux->proximo->anterior = aux->anterior;
      free(aux);
      l->tamanho--;
    }
    aux = aux->proximo;
  }

}

void adiciona_inicio_hashtable(hashtable* h, double x) { }

void adiciona_final_hastable(hashtable* h, double x) { }

void remove_item_hashtable(hashtable* h, double x) { }

void adiciona_inicio_hashmap(hashmap* hm, double x) { }

void adiciona_final_hashmap(hashmap* hm, double x) { }

void remove_item_hashmap(hashmap* hm, double x) { }

void breadth_first_search() { }

void depth_first_search() { }


int main(void)
{

  return 0; 

}
