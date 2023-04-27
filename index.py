def test(ok):
    if not isinstance(ok, int):
        if isinstance(ok, str):
            return 0
        ok = int(ok)
    return ok


print(test("test"))
print(type(test("test")))
print(test(50))
print(test(50.00))
