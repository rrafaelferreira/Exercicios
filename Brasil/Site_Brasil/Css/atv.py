import random

def menu():
    lis_numero = []
    lis_origem = []
    lis_destino = []
    lis_quant_assentos = []
    lis_valor = []
    lis_assentos_removidos = []
    lis_assentos = []
    descontos = 0
    descontos_25 = 0
    descontos_15 = 0
    descontos_5 = 0
    descontos_0 = 0
    lis_index_vo = []
    lis_reserva = []
    lis_nome = []
    lis_cpf = []
    lis_valor_pagar = []
    lis_index_vo_valor_inteiro = []
    lis_index_assentos = []
    

    vagas_25 = 0
    vagas_15 = 0
    vagas_5 = 0
    valores_negativos = []
    def buscar_passagem():

            while True:
                print(lis_nome)
                print(lis_reserva)
                codigo_dig = int(input("coloque -2 para voltar pro menu principal ou o codigo de reserva que você quer procurar:"))
                if codigo_dig == -2:
                    break

                elif codigo_dig not in lis_reserva:
                    print("codigo nao esta correto ou nao existe, tente novamente")
                    continue
                else:
                    index = lis_reserva.index(codigo_dig)
                    indexis = lis_index_assentos[index]
                    indexises = lis_numero.index(indexis)
                    print('*' * 70)
                    print("nome: ", lis_nome[index])
                    print("cpf:", lis_cpf[index])
                    print("assento numero: ", lis_assentos_removidos[index])
                    print("valor da passagem com desconto: ", lis_valor_pagar[index])
                    print("valor da passagem sem desconto: ", lis_index_vo_valor_inteiro[index])
                    print("do voo de numero:", lis_numero[indexises])
                    print("origem: ", lis_origem[indexises])
                    print("destino: ", lis_destino[indexises])
                    print('*' * 70)
                    continue

    def assentos_disponiveis():

            while True:
                print('*' * 70)
                print(lis_numero)
                codigo_dig = int(input("coloque -2 para voltar pro menu principal ou o numero do voô que você quer procurar:"))
                if codigo_dig == -2:
                    break

                elif codigo_dig not in lis_numero:
                    print('*' * 70)
                    print("codigo nao esta correto ou nao existe, tente novamente")
                    continue
                else:
                    index_vo = lis_numero.index(codigo_dig)
                    print('*' * 70)
                    print(f"assentos livre no voô:")
                    print(lis_assentos[index_vo])
                    print("total de assentos:")
                    print(len(lis_assentos[index_vo]))

    def valores_desconto_imprimir():
            print('*' * 70)
            print("quantidade de passagens compradas:", descontos_0 + descontos_15 + descontos_25 + descontos_5)
            print("quantidade de passagens comprados por 25% de desconto: ", descontos_25)
            print("quantidade de passagens comprados por 15% de desconto: ", descontos_15)
            print("quantidade de passagens comprados por  5% de desconto: ", descontos_5)
            print("quantidade de passagens comprados por 0% de desconto: ", descontos_0)

    def valores_voo_imprimir():

            print('*' * 70)
            print("valor total dos voo arrecadados: ")
            print(sum(lis_valor_pagar) - sum(valores_negativos))
    while True:
        print('*' * 70)
        print("1- cadastrar vôo", "2- Vender passagens", "3- menu do funcionario ", "4- remover uma passagem", sep='\n')

        clicar = input("digite o numero: ")

        if not clicar.isnumeric() or int(clicar) > 4 or int(clicar) < 1:
            print("você colocou caracteres que nao estao disponiveis no nosso banco de dados, pfvr digite o numero corretamente")
            continue
        else:
            clicar = int(clicar)

        if clicar == 1:
            print('*' * 70)

            while True:
                numero = int(input("digite o numero do vôo: "))
                if numero == -24 or numero in lis_numero:
                    print("esse número não está disponível, por favor escolha outro")
                else:
                    lis_numero.append(numero)
                    break

            origem = input("digite a origem do vôo: ")
            lis_origem.append(origem)

            destino = input("digite o destino do vôo: ")
            lis_destino.append(destino)

            lis_quant_assentos = []
            assentos = int(input("digite a quantidades de assentos "))

            for a in range(1, assentos + 1):
                lis_quant_assentos.append(a)
            print(lis_quant_assentos)

            lis_assentos.append(list(lis_quant_assentos))

            valor = int(input("digite o valor da passagem: "))
            lis_valor.append(valor)

            descontos += 1

            continue

        elif clicar == 2:
            print('*' * 70)
            if not lis_numero:
                print("nenhum voô foi registrado")
                continue

            while True:
                print("numeros dos voos: ",lis_numero)
                print("lugar de origem: ", lis_origem)
                print("destino final: ", lis_destino)

                escolha_vo = int(input("escolha o numero do voô: "))
                if escolha_vo not in lis_numero:
                    print('*' * 70)
                    print("escolha um numero de voô existente!")
                    continue
                else:
                    lis_index_vo.append(escolha_vo)
                    break

            reserva = random.randrange(40124, 105242)
            print(f"o seu numero de reserva é: {reserva}")
            lis_reserva.append(reserva)

            nome = input("digite apenas o seu primeiro nome: ")
            lis_nome.append(nome)

            index = lis_numero.index(escolha_vo)

            cpf = int(input("digite o seu cpf: "))
            lis_cpf.append(cpf)

            while True:
                print(lis_assentos[index])
                assento_escolhido = int(input("selecione o numero do assento disponivel: "))

                if assento_escolhido not in lis_assentos[index]:
                    print('*' * 70)
                    print("digite o numero de um assento disponivel")
                    continue
                else:
                    lis_assentos[index].remove(assento_escolhido)
                    lis_assentos_removidos.append(assento_escolhido)
                    lis_index_assentos.append(escolha_vo)

                    break

            if 0 <= descontos_25 <= 9 or vagas_25 > 1:
                valor_pagar = lis_valor[index] - ((lis_valor[index] / 100) * 25)
                descontos_25 += 1

            elif 0 <= descontos_15 <= 9 or vagas_15 > 1:
                valor_pagar = lis_valor[index] - ((lis_valor[index] / 100) * 15)
                descontos_15 += 1

            elif 0 <= descontos_5 <= 9 or vagas_5 > 1:
                valor_pagar = lis_valor[index] - ((lis_valor[index] / 100) * 5)
                descontos_5 += 1

            else:
                valor_pagar = lis_valor[index]
                descontos_0 += 1

            lis_index_vo_valor_inteiro.append(lis_valor[index])

            print("você pagou: ", valor_pagar, " nessa passagem")
            lis_valor_pagar.append(valor_pagar)



        elif clicar == 3:
            if not lis_numero:
                print('*' * 70)
                print("nenhum voô foi registrado")
                continue

            while True:
                print('*' * 70)
                print("menu do funcionario ")
                print("1- buscar passagem")
                print("2- imprimir quantidades de assentos que ainda estao disponiveis")
                print("3- imprimir quantidade de reservas que foram realizadas")
                print("4- imprimir valores arrecadados")
                print("5- para voltar pro menu principal")
                clicar_2 = input("selecione o que você deseja: ")

                if not clicar_2.isnumeric() or 1 > int(clicar_2) > 5:
                    print("você colocou caracteres que nao estao disponiveis no nosso banco de dados, pfvr digite o numero corretamente")
                    continue

                clicar_2 = int(clicar_2)

                if clicar_2 == 1:
                    buscar_passagem()
                elif clicar_2 == 2:
                    assentos_disponiveis()
                elif clicar_2 == 3:
                    valores_desconto_imprimir()
                elif clicar_2 == 4:
                    valores_voo_imprimir()
                elif clicar_2 == 5:
                    break
        elif clicar == 4:
            print('*' * 70)
            if not lis_reserva:
                print("nenhuma passagem foi registrada")
                continue
            print(lis_nome)
            print(lis_reserva)
            cancelar = int(input("coloque -2 para voltar pro menu principal ou selecione qual passagem deseja cancelar: "))
            if cancelar == -2:
                continue
            elif cancelar not in lis_reserva:
                print('*' * 70)
                print("nenhuma reserva foi encontrada, tente novamente")
                    
                
            else:
                indexx = lis_reserva.index(cancelar)
                lis_nome.pop(indexx)
                lis_cpf.pop(indexx)
                lis_reserva.pop(indexx)
                indexis = lis_index_assentos[indexx]
                indexises = lis_numero.index(indexis)
                lis_assentos[indexises].append(lis_assentos_removidos[indexx])
                lis_assentos_removidos.pop(indexx)
                lis_assentos[indexises].sort()

                if indexx >= 0 and indexx <= 9:
                    vagas_25 += 1
                    descontos_25 += -1
                elif indexx >= 10 and indexx <= 19:
                    vagas_15 += 1
                    descontos_15 += -1
                elif indexx >= 20 and indexx <= 29:
                    vagas_5 += 1
                    descontos_5 += -1
                else:
                    descontos += -1

                valores_negativos.append(lis_valor_pagar[indexx])

                print("passagem cancelada e informações atualizadas")

menu()