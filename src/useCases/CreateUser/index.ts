import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const mailtrapMailProvider = new MailTrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository, mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export {createUserUseCase, createUserController}