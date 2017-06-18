package br.com.jhipsterproject.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Livro.
 */
@Entity
@Table(name = "livro")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Livro implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "isbn")
    private String isbn;

    @Column(name = "ano")
    private String ano;

    @Column(name = "edicao")
    private String edicao;

    @Column(name = "editora")
    private String editora;

    @ManyToOne
    private Instituicao livro;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public Livro nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIsbn() {
        return isbn;
    }

    public Livro isbn(String isbn) {
        this.isbn = isbn;
        return this;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getAno() {
        return ano;
    }

    public Livro ano(String ano) {
        this.ano = ano;
        return this;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

    public String getEdicao() {
        return edicao;
    }

    public Livro edicao(String edicao) {
        this.edicao = edicao;
        return this;
    }

    public void setEdicao(String edicao) {
        this.edicao = edicao;
    }

    public String getEditora() {
        return editora;
    }

    public Livro editora(String editora) {
        this.editora = editora;
        return this;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public Instituicao getLivro() {
        return livro;
    }

    public Livro livro(Instituicao instituicao) {
        this.livro = instituicao;
        return this;
    }

    public void setLivro(Instituicao instituicao) {
        this.livro = instituicao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Livro livro = (Livro) o;
        if (livro.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), livro.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Livro{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", isbn='" + getIsbn() + "'" +
            ", ano='" + getAno() + "'" +
            ", edicao='" + getEdicao() + "'" +
            ", editora='" + getEditora() + "'" +
            "}";
    }
}
