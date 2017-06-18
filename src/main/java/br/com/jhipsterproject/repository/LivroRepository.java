package br.com.jhipsterproject.repository;

import br.com.jhipsterproject.domain.Livro;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Livro entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LivroRepository extends JpaRepository<Livro,Long> {
    
}
