import { EntityRepository, Repository } from 'typeorm';
import { Suggestion } from '../entity/Suggestion';

@EntityRepository(Suggestion)
class SuggetionRepository extends Repository<Suggestion>{}

export {SuggetionRepository}