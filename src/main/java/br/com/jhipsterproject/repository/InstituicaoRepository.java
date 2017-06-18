package br.com.jhipsterproject.repository;

import br.com.jhipsterproject.domain.Instituicao;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Instituicao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InstituicaoRepository extends JpaRepository<Instituicao,Long> {
    
}
