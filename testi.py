from selenium import webdriver
import time
import pytest
from selenium.webdriver.common.by import By

link = 'http://test3/bd.php'
browser = webdriver.Chrome()
browser.get(link)

def test1_meow():
    meow = browser.find_element(By.XPATH, '//*[@id="navbarMenuHeroA"]/div/span[1]/a').click()
    gav = browser.find_element(By.XPATH, '//*[@id="navbarMenuHeroA"]/div/span[1]/a').text
    if gav == 'Больницы':
        print( 'ТЕСТ1 ПРОЙДЕН ')

def test2_meow():
    meow = browser.find_element(By.XPATH, '//*[@id="navbarMenuHeroA"]/div/span[1]/a').click()
    gav1 = browser.find_element(By.XPATH, '/html/body/section/div[2]/div/div[2]/a[1]').click()
    gav2 = browser.find_element(By.XPATH, '/html/body/section/div[2]/div/div[1]/p').text
    if gav2 == 'Сотрудники больницы "Сова"':
        print( 'ТЕСТ2 ПРОЙДЕН ')

def test3_meow():
    meow = browser.find_element(By.XPATH, '//*[@id="navbarMenuHeroA"]/div/span[1]/a').click()
    gav = browser.find_element(By.XPATH, '//*[@id="navbarMenuHeroA"]/div/span[1]/a').text
    if gav == 'Больницы':
        print( 'ТЕСТ3 ПРОЙДЕН ')

test1_meow()
test2_meow()
test3_meow()


